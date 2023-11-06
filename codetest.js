 /* checkbox to filter products */
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleFilter = () => {
    const filtered = products.filter((product) =>
      selectedCategories.includes(product.category)
    );
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setFilteredProducts([]);
  };

  const availableCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  /* SHUFFLING PRODUCTS */
  const [shuffledProducts, setShuffledProducts] = useState([]);
  /* SHUFFLE THE PRODUCTS */
  useEffect(() => {
    const shuffledData = shuffleProducts(products);
    setShuffledProducts(shuffledData);
  }, [products]);
  
  // FUNCTION TO SHUFFLE THE PRODUCTS
  const shuffleProducts = (arr) => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };

   // products.forEach((product) => {
  //   const price = product.price
  //   if(price < 20){
  //     console.log("< 20", product.id);
  //   }
  //   if(price <= 50 && price >= 20){
  //     console.log("20-50", product.id);

  //   }
  //   if(price >= 50 && price <= 100){
  //     console.log("50 - 100", product.id);

  //   }
  //   if(price >= 100 && price <= 200){
  //     console.log("100 - 200", product.id);

  //   }
  //   if(price >= 200 && price <= 500){
  //     console.log("200 - 500", product.id);

  //   }
  //   if(price > 500){
  //     console.log("> 500", product.id);

  //   }
  // });