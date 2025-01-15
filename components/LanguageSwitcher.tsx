// components/LanguageSwitcher.tsx
import { Button, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClick} color="inherit">
        {i18n.language.toUpperCase()}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('fr')}>Français</MenuItem>
        <MenuItem onClick={() => changeLanguage('es')}>Español</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;