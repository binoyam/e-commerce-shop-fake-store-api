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