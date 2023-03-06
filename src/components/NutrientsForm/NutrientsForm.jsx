import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const NutrientsForm = () => {
  const [carbs, setCarbs] = useState([0, 50]);
  const [protein, setProtein] = useState([0, 10]);
  const [calories, setCalories] = useState([0, 10]);
  const [fat, setFat] = useState([0, 10]);
  const [alcohol, setAlcohol] = useState([0, 50]);
  const [caffeine, setCaffeine] = useState([0, 50]);
  const [copper, setCopper] = useState([0, 10]);
  const [calcium, setCalcium] = useState([0, 10]);
  const [choline, setCholine] = useState([0, 10]);
  const [cholesterol, setCholesterol] = useState([0, 10]);
  const [fluoride, setFluoride] = useState([0, 10]);
  const [saturatedFat, setSaturatedFat] = useState([0, 10]);

  const nutrientsArr = [
    { name: 'Carbs', value: carbs, fn: setCarbs, min: 10, max: 100 },
    { name: 'Protein', value: protein, fn: setProtein, min: 10, max: 100 },
    { name: 'Calories', value: calories, fn: setCalories, min: 50, max: 800 },
    { name: 'Fat', value: fat, fn: setFat, min: 1, max: 100 },
    { name: 'Alcohol', value: alcohol, fn: setAlcohol, min: 0, max: 100 },
    { name: 'Caffeine', value: caffeine, fn: setCaffeine, min: 0, max: 100 },
    { name: 'Copper', value: copper, fn: setCopper, min: 0, max: 100 },
    { name: 'Calcium', value: calcium, fn: setCalcium, min: 0, max: 100 },
    { name: 'Choline', value: choline, fn: setCholine, min: 0, max: 100 },
    {
      name: 'cholesterol',
      value: cholesterol,
      fn: setCholesterol,
      min: 0,
      max: 100,
    },
    { name: 'fluoride', value: fluoride, fn: setFluoride, min: 0, max: 100 },
    {
      name: 'saturatedFat',
      value: saturatedFat,
      fn: setSaturatedFat,
      min: 0,
      max: 100,
    },
  ];

  const logNum = () => {
    console.log(carbs, protein, calories);
  };
  
  const formatTooltipValue = value => {
    return `${value}%`;
  };

  return (
    <>
      {nutrientsArr.map(el => {
        return (
          <div key={el.name}>
            <p>
              {el.name}:{el.min}-{el.max}
            </p>

            <Slider
              range
              min={el.min}
              max={el.max}
              defaultValue={el.value}
              onChange={el.fn}
              tipFormatter={formatTooltipValue}
            />
          </div>
        );
      })}
      <button type="button" onClick={logNum}>
        Click
      </button>
    </>
  );
};

// export const NutrientsForm = () => {
//   const [carbs, setCarbs] = useState(0);
//   const [protein, setProtein] = useState(0);
//   const [calories, setCalories] = useState(0);

//    const handleChange = (event) => {
//      switch (event.currentTarget.name) {
//        case 'carbs':
//          setCarbs(event.currentTarget.value);
//          break;
//        case 'protein':
//          setProtein(event.currentTarget.value);
//          break;
//        case 'calories':
//          setCalories(event.currentTarget.value);
//          break;

//        default:
//          break;
//      }
//    };
//   const logNum = () => {
//     console.log(carbs, protein, calories);
//   }
//     return (
//       <div>
//         <label htmlFor="carbsID">Carbs rate:</label>
//         <input
//           id="carbsID"
//           type="range"
//           name="carbs"
//           min="10"
//           max="100"
//           step="1"
//           value={carbs}
//           onChange={handleChange}
//         />
//         <label htmlFor="proteinID">Protein rate:</label>
//         <input
//           id="proteinID"
//           type="range"
//           name="protein"
//           min="10"
//           max="100"
//           step="1"
//           value={protein}
//           onChange={handleChange}
//         />
//         <label htmlFor="caloriesID">Calories rate:</label>
//         <input
//           id="caloriesID"
//           type="range"
//           name="calories"
//           min="50"
//           max="800"
//           step="1"
//           value={calories}
//           onChange={handleChange}
//         />
//         <button type="button" onClick={logNum}>
//           Click
//         </button>
//       </div>
//     );
// };
