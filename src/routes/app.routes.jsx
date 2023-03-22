import { Route, Routes } from "react-router-dom";
import { Edit } from "../pages/edit";
import { Feed } from "../pages/feed";
import { Post } from "../pages/post";
import { ReadMore } from "../pages/readmore";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}/>
      <Route path="/edit" element={<Edit />}/>
      <Route path="/readmore" element={<ReadMore />}/>
      <Route path="/post" element={<Post />}/>
    </Routes>
  )
}