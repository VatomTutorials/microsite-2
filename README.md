# A Micro-Site to Customize Your Brand Experience
### An Experience Kit Tutorial for Embedding a Micro-Site Within A Vatom Wallet
---

<br>

This tutorial demonstrates a simple React JS micro-site using Vite and Experience Kit.
It was created by following developer instructions given online for using
the [Vatom Experience Kit](https://developer.vatom.com/wallet/experience-kit/overview/) .

<br>

> ***NOTE:***
> If you wish to clone this repository rather than recreate it step by step,
> you will have to substitute your own business ID for the `bizIDx123`
> placeholder value that appears in the build script and code.


### Wish list:

TS infinite scroll
- https://medium.com/@stevelukis/infinite-scroll-in-react-typescript-react-query-db89640c615

May be able to use a JS library in TS
- https://medium.com/@steveruiz/using-a-javascript-library-without-type-declarations-in-a-typescript-project-3643490015f3

Add scrollable list
- https://github.com/jwarning/react-scrollable-list
  - yarn add react-scrollable-list

				<ReactScrollableList
					listItems={listItems}
					heightOfItem={30}
					maxItemsToRender={20}
					style={{ color: '#333' }}
				/>

- https://www.npmjs.com/package/@mui/material
  - yarn add @mui/system @emotion/react @emotion/styled
  
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>					

Image buttons
- https://stackoverflow.com/questions/36113367/how-to-make-image-buttons-in-jsx
- see "If you're using React bootstrap button, typescript code work as below..."