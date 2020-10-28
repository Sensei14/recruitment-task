import React, { useEffect } from "react";
import Composition from "./Composition";

import { useSelector, useDispatch } from "react-redux";

import compositionsData from "./CompositionsAPI.json";

const CompositionsList = () => {
  const compositionsList = useSelector((state) => state.compositions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_COMPOSITIONS",
      payload: compositionsData.tracks,
    });
  }, [dispatch]);

  const compositions = compositionsList.compositions.map((comp) => (
    <Composition key={comp.id} data={comp} />
  ));

  return <div className='latter-compositions__list'>{compositions}</div>;
};

export default CompositionsList;
