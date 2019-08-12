import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageData from "./PageData";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Creators as PagesActions } from "../../store/ducks/pages";

export default function Page({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PagesActions.getPagesRequest());
    dispatch(AlbumsActions.getAlbumsRequest());
  }, []);

  const pages = useSelector(state => state.pages.data);
  return <PageData pageData={pages} />;
}
