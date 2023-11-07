import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import "../components/components.css";

export default function Footer() {
  const [color, setColor] = React.useState("neutral");
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "neutral" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
      className="footer"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "100%", md: "auto" },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: "initial" } }}
          >
            <img
              alt=""
              src="https://png.pngtree.com/template/20191014/ourlarge/pngtree-building-logo-design-template-house-vector-logo-with-tree-and-sun-image_317909.jpg"
            />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Entra a mi GITHUB</Typography>
            <Typography level="body-xs">¡Descubre mis trabajos!</Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--ListItem-gap": "0px",
          }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader sx={{ fontWeight: "xl", marginBottom: "6px" }}>Copyright</ListSubheader>
            <List>
              <ListItem component="a" >
                <ListItemButton>Melina C. Pereyra</ListItemButton>
              </ListItem>
              <ListItem button component="a" href="https://github.com/MelinaPereyra?tab=repositories">
                <ListItemButton>Github</ListItemButton>
              </ListItem>
              <ListItem button component="a" href="https://www.linkedin.com/in/melina-pereyra-790452267/">
                <ListItemButton>LinkedIn</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}