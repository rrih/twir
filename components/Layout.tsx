import React, { ReactNode } from 'react'
import Link from 'next/link'
// import styled from "styled-components";
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import { year } from "../utils/time";
import ListItemText from '@material-ui/core/ListItemText';
// import { LinkTabInAppBar } from '../utils/style';
import { Footer, Root, WhiteLink } from '../styles';

type Props = {
    children?: ReactNode
    title?: string
}

export const Layout = ({ children, title = 'twir' }: Props) => (
    <Root>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta
              name="description"
              content="Twitter Client"
            />
            <style>{`body { margin: 0 } /* custom! */`}</style>
            <style>
                {`.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-colorInherit { padding: 20px !important; } /* custom! */`}
                {
                    `.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters { padding: 0 !important; } /* custom! */`
                }
            </style>
        </Head>

        {/* ヘッダー */}
        <AppBar position="static" color="secondary">
            <Toolbar>
                <FadeMenu />
            </Toolbar>
        </AppBar>
        {children}
        {/* フッター */}
        <Footer>
            <hr />
            &copy; twir
        </Footer>
    </Root>
)

const FadeMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
      <div>
        <Button onClick={handleClick} color="inherit">
          <MenuIcon color="inherit" />
        </Button>
        <SwipeableDrawer
          open={open}
          onClose={handleClose}
          onOpen={() => open}
        >
          <ListIcon />
        </SwipeableDrawer>
      </div>
    );
}

const ListIcon = () => (
  <>
    <List>
        <ListItem button>
          <ListItemText>
            ホーム
          </ListItemText>
        </ListItem>
        {/* <Divider />
        <ListItem button >
          プロフィール
        </ListItem>
        <Divider />
        <ListItem button >
          フォロー
        </ListItem>
        <Divider />
        <ListItem button >
          フォロワー
        </ListItem> */}
        <Divider />
        <ListItem button>
          <a href="/auth">
            ログイン
          </a>
        </ListItem>
    </List>
  </>
);