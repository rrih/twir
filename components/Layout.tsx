import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Footer, Root } from '../styles'
import { url } from '../utils/url'

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
			<meta name="description" content="Twitter Client" />
			<style>{`body { margin: 0 } /* custom! */`}</style>
			<style>
				{`.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-colorInherit { padding: 20px !important; } /* custom! */`}
				{`.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters { padding: 0 !important; } /* custom! */`}
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
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button onClick={handleClick} color="inherit">
				<MenuIcon color="inherit" />
			</Button>
			<SwipeableDrawer open={open} onClose={handleClose} onOpen={() => open}>
				<ListIcon />
			</SwipeableDrawer>
		</div>
	)
}

const ListIcon = () => (
	<>
		<List>
			<ListItem button>
				<ListItemText>
					<a href={url}>トップ</a>
				</ListItemText>
			</ListItem>
			<Divider />
			<ListItem button>
				<a href={`${url}/search`}>検索</a>
			</ListItem>
			<Divider />
			<ListItem button>
				<a href={`${url}/api/auth/signin/twitter`}>ログイン</a>
			</ListItem>
		</List>
	</>
)
