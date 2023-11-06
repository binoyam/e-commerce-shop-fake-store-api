import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";

function PriceFilter({ products }) {
  const [selectedRange, setSelectedRange] = useState("");
  const ranges = [
    { label: "0 to 20", min: 0, max: 20 },
    { label: "20 to 50", min: 20, max: 50 },
    { label: "50 to 100", min: 50, max: 100 },
    { label: "100 to 500", min: 100, max: 500 },
    { label: "Above 500", min: 500, max: Infinity },
  ];

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const selectedRangeObj = ranges.find((range) => range.label === selectedRange);
    if (selectedRangeObj) {
      const { min, max } = selectedRangeObj;
      return product.price >= min && product.price <= max;
    }
    return true;
  }); 
  return (
    <div>
      <h2>Product Filter</h2>
      <select value={selectedRange} onChange={handleRangeChange}>
        <option value="">All</option>
        {ranges.map((range) => (
          <option key={range.label} value={range.label}>
            {range.label}
          </option>
        ))}
      </select>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default PriceFilter;
