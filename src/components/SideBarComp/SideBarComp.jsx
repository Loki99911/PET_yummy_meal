import {
  SideBarBtn,
  SideBarItem,
  SideBarItemTitle,
  SideBarList,
  SideBarPlace,
  SideBarWraper,
} from './SideBarComp.styled';
import {
  BiCaretDown,
  BiCaretLeft,
  BiCaretRight,
  BiCaretUp,
} from 'react-icons/bi';
import { useState } from 'react';
import { NutrientsForm } from 'components/NutrientsForm/NutrientsForm';
import { IngredientsForm } from 'components/IngredientsForm/IngredientsForm';
// const arr = ['findByNutrients', 'findByIngredients'];
export const SideBarComp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [nutrients, setNutrients] = useState(false);
  const [ingredients, setIngredients] = useState(false);
  const handleSidebarToggle = event => {
    if (event.currentTarget.id === 'nutrients') {
      return setNutrients(!nutrients);
    } else if (event.currentTarget.id === 'ingredients') {
      return setIngredients(!ingredients);
    } else {
      return setIsSidebarOpen(!isSidebarOpen);
    }
  };
  return (
    <SideBarPlace >
      <SideBarWraper isOpen={isSidebarOpen}>
        <SideBarList>
          <SideBarItem>
            <SideBarItemTitle onClick={handleSidebarToggle} id="nutrients">
              <p>Search by nutrients:</p>
              {nutrients ? <BiCaretDown /> : <BiCaretUp />}
            </SideBarItemTitle>
            {nutrients && <NutrientsForm />}
          </SideBarItem>
          <SideBarItem>
            <SideBarItemTitle onClick={handleSidebarToggle} id="ingredients">
              <p>Search by ingredients:</p>
              {ingredients ? <BiCaretDown /> : <BiCaretUp />}
            </SideBarItemTitle>
            {ingredients && <IngredientsForm />}
          </SideBarItem>
        </SideBarList>
        <SideBarBtn type="button" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <BiCaretLeft /> : <BiCaretRight />}
        </SideBarBtn>
      </SideBarWraper>
    </SideBarPlace>
  );
};
