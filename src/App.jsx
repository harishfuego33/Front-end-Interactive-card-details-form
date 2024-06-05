import { useEffect, useState } from "react";

const App = () => {
  const [card, setCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [alert, setalert] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [active, setActive] = useState(false);
  let tempCard = "0000 0000 0000 0000";
  let tempMM = "00";
  let tempYY = "00";
  let tempCVC = "000";
  let tempName = "Jane Appleseed";
  useEffect(() => {
    for (let i = 0; i < card.length; i++) {
      if (isNaN(card[i])) setalert(true);
    }
    if (card.length === 19) {
      setalert(false);
    }
    return () => {
      setalert(false);
    };
  }, [alert, card]);
  if (card.length) tempName = cardHolderName;
  if (card.length === 19) tempCard = card;
  if (year.length === 2) tempYY = year;
  if (month.length === 2 || month.length === 1) tempMM = month;
  if (cvc.length === 3) tempCVC = cvc;
  return (
    <main className="card__main">
      <section className="card__section--1">
        <div className="card__img--1">
          <div className="card__log--box">
            <img
              src="/images/card-logo.svg"
              alt="card__log"
              className="card__log"
            />
          </div>
          <p className="card__number">{tempCard}</p>
          <div className="card__holder">
            <p className="card__holder--name">{tempName}</p>
            <span className="card__holder-exp">
              {tempMM}/{tempYY}
            </span>
          </div>
        </div>
        <div className="card__img--2">
          <p className="card__back--cvc">{tempCVC}</p>
        </div>
      </section>
      <section className={`card__section--2 ${active ? "hidden" : ""}`}>
        <div className="card__form">
          <div className="card__form--name">
            <p className="card__form--placeholdername">CARDHOLDER NAME</p>
            <input
              type="text"
              className="card__form-input"
              placeholder="e.g. Jane Appleseed"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              name="name"
              required
            />
          </div>
          <div className="card__form--name">
            <p className="card__form--placeholdername">CARD NUMBER </p>
            <input
              type="text"
              className={`card__form-input ${alert ? "alert" : ""}`}
              placeholder="0000 0000 0000 0000"
              value={card}
              name="cardnumber"
              id="cardnumber"
              maxLength="19"
              onChange={(e) => {
                setCard(
                  e.target.value
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()
                );
              }}
              required
            />
            <label htmlFor="cardnumber" className="cardnumber-inputlabel">
              Wrong format,numbers only
            </label>
          </div>
          <div className="card__date-cvv">
            <div className="card__date">
              <div className="card__form-exp--date">
                <p className="card__form--placeholdername">
                  EXP. DATE (MM/YY){" "}
                </p>
                <input
                  type="number"
                  className="card__input--date-1"
                  placeholder="MM"
                  name="cardnumber"
                  value={month}
                  id="expmon"
                  min="1"
                  max="12"
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />
                <input
                  type="number"
                  className="card__input--date-2"
                  placeholder="YY"
                  name="cardnumber"
                  id="expyear"
                  value={year}
                  min="1"
                  max="99"
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
                <label htmlFor="expmon" className="date-inputlabel-1">
                  Cant&apos;be blank
                </label>
                <label htmlFor="expyear" className="date-inputlabel-2">
                  Cant&apos;be blank
                </label>
              </div>
            </div>
            <div className="card__cvc">
              <p className="card__form--placeholdername"> CVV </p>
              <input
                type="number"
                className="card__input-cvv "
                placeholder="e.g. 123"
                name="cardnumber"
                value={cvc}
                id="cardcvc"
                maxLength="3  "
                max="999"
                required
                onChange={(e) => setCvc(e.target.value)}
              />
              <label htmlFor="cardcvc" className="cvv-inputlabel">
                Cant&apos;be blank
              </label>
            </div>
          </div>
          <button className="card__btn" onClick={() => setActive(!active)}>
            Confirm
          </button>
        </div>
      </section>
      <section className={`card__section--2 ${active ? "" : "hidden"}`}>
        <div className="card__form align-items-center">
          <div className="thank__you--logo">
            <img src="/images/icon-complete.svg" alt="thick-mark" />
          </div>
          <h1 className="thank__you">thank you!</h1>
          <p className="acknowledgement">We&apos;ve added your card details</p>
          <button className="card__btn" onClick={() => setActive(!active)}>
            Continue
          </button>
        </div>
      </section>
    </main>
  );
};
export default App;
