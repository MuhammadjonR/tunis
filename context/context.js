"use client";

import { createContext, useCallback, useReducer } from "react";

// Create Context
const TunisContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
  COLOR: "COLOR",
  DIRECTION: "DIRECTION",
  POPUP: "POPUP",
  DARK: "DARK",
};
const { NAV, TOGGLE, COLOR, POPUP, DIRECTION, DARK } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
  color: "yellow",
  direction: "top",
  popup: null,
  blogs: [
    {
      id: 1,
      author: "Umar",
      date: "09 December 2024",
      tags: "economy, design",
      title: "Ijtimoiy tarmoq uchun post tayyorlashda quyidagi omillarni hisobga olish kerak:",
      img: "/assets/img/projects/blog.jpg",
      desc: "Ma'qsad va auditoriyani aniqlash"
    }
  ],
  dark: true,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case DIRECTION:
      return {
        ...state,
        direction: payload,
      };
    case POPUP:
      return {
        ...state,
        popup: payload,
      };
    case DARK:
      return {
        ...state,
        dark: payload,
      };
    default:
      return state;
  }
};

// Watson State
const TunisState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const changeColor = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const changeDirection = useCallback((value) => {
    dispatch({
      type: DIRECTION,
      payload: value,
    });
  }, []);

  const popupToggle = useCallback((value) => {
    dispatch({
      type: POPUP,
      payload: value,
    });
  }, []);

  const darkToggle = useCallback((value) => {
    dispatch({
      type: DARK,
      payload: value,
    });
  }, []);

  const { nav, toggle, color, direction, popup, blogs, dark } = state;
  return (
    <TunisContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
        color,
        changeColor,
        direction,
        changeDirection,
        popupToggle,
        popup,
        blogs,
        dark,
        darkToggle,
      }}
    >
      {children}
    </TunisContext.Provider>
  );
};

export default TunisState;
export { TunisContext };
