import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Creators as PagesActions } from "../../store/ducks/pages";
import { StyledHashLink } from "../../styles/components";
import SocialIcons from '../SocialIcons'

export default function Menu(props) {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PagesActions.getPagesRequest());
    dispatch(AlbumsActions.getAlbumsRequest());
  }, [dispatch]);

  const pages = useSelector(state => state.pages.data);

  return (
    !props.children ? (
      <div>
        {pages.map(page => (
          <StyledHashLink key={page.id} smooth to={`#${page.title}`}>
            {!(page.title === "home" || page.title === "contact") && page.title}
          </StyledHashLink>
        ))}
        <SocialIcons />
      </div>
    ) : (
        <div>{props.children}</div>
      )
  );
}
