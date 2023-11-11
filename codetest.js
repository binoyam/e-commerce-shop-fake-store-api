

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


  <form onSubmit={handleSubmit}>
  <div className="payment-methods">
    <div>
      <input type="radio" id="method" />
      <div className="img-wrapper">
        <img className="master" src={MasterCardLogo} alt="mastercard" />
      </div>
    </div>
    <div>
      <input type="radio" id="method" />
      <div className="img-wrapper">
        <img className="visa" src={VisaLogo} alt="visa" />
      </div>
    </div>
    <div>
      <input type="radio" id="method" />
      <div className="img-wrapper">
        <img className="paypal" src={PaypalLogo} alt="paypal" />
      </div>
    </div>
    <div>
      <input type="radio" id="method" />
      <div className="img-wrapper">
        <img className="bitcoin" src={BitcoinLogo} alt="bitcoin" />
      </div>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="card-number" className="label">
      Card Number:
    </label>
    <input
      id="card-number"
      className="input"
      type="text"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="exp-date" className="label">
      Expiry Date:
    </label>
    <input
      id="exp-date"
      className="input"
      type="text"
      value={expiryDate}
      onChange={(e) => setExpiryDate(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="cvc" className="label">
      CVV:
    </label>
    <input
      id="cvc"
      className="input"
      type="text"
      value={cvv}
      onChange={(e) => setCvv(e.target.value)}
    />
  </div>
  <button className="pay-btn" type="submit">
    Pay Now
  </button>
</form>