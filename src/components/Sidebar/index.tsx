import { NavLink } from 'react-router-dom';

import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from 'phosphor-react';

import twitterLogo from '../../assets/logo-twitter.svg';

import './styles.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>

        <NavLink to="/explore">
          <Hash />
          Explore
        </NavLink>

        <NavLink to="/notifications">
          <Bell />
          Notifications
        </NavLink>

        <NavLink to="/messages">
          <Envelope />
          Messages
        </NavLink>

        <NavLink to="/bookmarks">
          <BookmarkSimple />
          Bookmarks
        </NavLink>

        <NavLink to="/lists">
          <FileText />
          Lists
        </NavLink>

        <NavLink to="/profile">
          <User />
          Profile
        </NavLink>

        <NavLink to="/more">
          <DotsThreeCircle />
          More
        </NavLink>
      </nav>

      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
