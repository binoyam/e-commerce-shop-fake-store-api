  // console.log(products);
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