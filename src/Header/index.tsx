import React from 'react';
import './index.css';

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  const { title } = props;
  return <div className="red">{title}</div>;
};

export default Header;
