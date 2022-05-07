import { useState, useRef } from "react";

const replaceForIndex = (value, index, replacemant) => {
  return (
    value.substr(0, index) +
    replacemant +
    value.substr(index + replacemant.length)
  );
};

const checkVal = (ref, length) => {
  if (ref.current.value.replace(/\D/g, "").length < length)
    ref.current.classList.add("error");
};

const Form = () => {
  const [cardNumber, setCardNumber] = useState("");
  const inputCardNumber = useRef(null);
  const [expirationDate, setExpirationDate] = useState("");
  const inputExpirationDate = useRef(null);
  const [cvv, setCvv] = useState("");
  const inputCvv = useRef(null);

  const buttonSubmit = useRef(null);

  const changeCardNumber = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const cleanValue = value.replace(/\D/g, "");
    // Ограничиваем количество символов
    if (cleanValue && cleanValue.length <= 16) {
      const newValue = cleanValue.match(/\d?\d?\d?\d/g).join(" - ");
      setCardNumber(newValue);
      // По ТЗ нужно переключаться на следующее поле
      if (cleanValue.length == 16) {
        inputExpirationDate.current.removeAttribute('disabled');
        inputExpirationDate.current.focus();
        inputCardNumber.current.classList.remove("error");
      }
    } else if (!cleanValue) {
      // Очищаем стейт, если нет значения
      setCardNumber("");
    }
  };

  const changeExpirationDate = (e) => {
    e.preventDefault();
    const { value } = e.target;
    let cleanValue = value.replace(/\D/g, "");
    // Ограничиваем количество символов
    if (cleanValue && cleanValue.length <= 4) {
      // Первое значение поля - месяц
      // Делаем проверку посимвольно для применения форматирования при каждом вводе
      if (cleanValue[0] > 1) {
        cleanValue = replaceForIndex(cleanValue, 0, "0");
      }
      if (
        (cleanValue[1] && cleanValue[1] > 2 && cleanValue[0] == 1) ||
        (cleanValue[0] == "0" && cleanValue[1] == "0")
      ) {
        cleanValue = replaceForIndex(cleanValue, 1, "2");
      }

      const newValue = cleanValue.match(/\d\d?/g).join(" / ");
      setExpirationDate(newValue);
      // По ТЗ нужно переключаться на следующее поле
      if (cleanValue.length == 4) {
        inputCvv.current.removeAttribute('disabled');
        inputCvv.current.focus();
        inputExpirationDate.current.classList.remove("error");
      }
    } else if (!cleanValue) {
      // Очищаем стейт, если нет значения
      setExpirationDate("");
    }
  };

  const changeCvv = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const cleanValue = value.replace(/\D/g, "");
    // Ограничиваем количество символов
    if (cleanValue && cleanValue.length <= 3) {
      setCvv(cleanValue);
      // По ТЗ нужно переключаться на следующее поле
      if (cleanValue.length == 3) {
        buttonSubmit.current.focus();
        inputCvv.current.classList.remove("error");
      }
    } else if (!cleanValue) {
      // Очищаем стейт, если нет значения
      setCvv("");
    }
  };

  return (
    <form
      className="card__body"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Success");
      }}
    >
      <div className="form-control">
        <label htmlFor="">Kartın nömrəsi</label>
        <div className="input-wrapper">
          <input
            ref={inputCardNumber}
            className="input--card-number"
            type="text"
            placeholder="0000 - 0000 - 0000 - 0000"
            value={cardNumber}
            onChange={changeCardNumber}
            required
            pattern="\d{4} - \d{4} - \d{4} - \d{4}"
            title="Формат 0000 - 0000 - 0000 - 0000"
            onBlur={() => checkVal(inputCardNumber, 16)}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="">Bitmə tarixi</label>
          <div className="input-wrapper">
            <input
              ref={inputExpirationDate}
              className="input--expiration-date"
              type="text"
              placeholder="00 / 00"
              value={expirationDate}
              onChange={changeExpirationDate}
              required
              pattern="\d{2} / \d{2}"
              title="Формат 00 / 00"
              onBlur={() => checkVal(inputExpirationDate, 4)}
              // По ТЗ пользователь не может иметь возможость редактировать это поле, пока не заполнил предыдущее
              disabled
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="">CVV/CVC2</label>
          <div className="input-wrapper">
            <input
              ref={inputCvv}
              className="input--cvv"
              type="password"
              placeholder="***"
              value={cvv}
              onChange={changeCvv}
              required
              pattern="\d{3}"
              title="Формат 000"
              onBlur={() => checkVal(inputCvv, 3)}
              disabled
            />
            <div className="input-wrapper__subtext">
              Kartın arxasında yerləşən 3 rəqəm
            </div>
          </div>
        </div>
      </div>
      <div className="form-control">
        <button ref={buttonSubmit} type="submit">
          Ödəmək
        </button>
      </div>
    </form>
  );
};

export default Form;
