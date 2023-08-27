'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getPosts } from "@/app/api/apiPosts";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Posts() {
  interface PostsFormat {
    category: string;
    content: string;
    id: number;
    image: string;
    publishedAt: string;
    slug: string;
    status: string;
    title: string;
    thumbnail: string;
    url: string;
    updatedAt: string;
    userId: number;
  }
  const [posts, setPosts] = useState<PostsFormat[]>([]);
  const [termo, setTermo] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPosts((isOk, data) => {
      if(!isOk){
        console.log("Give posts un successful", data);
        setLoading(false);
      } else {
        console.log("dataList: ", data);
        setPosts(data.data);
        setLoading(false);
      }
    })
  }, [termo]);
  useEffect(() => {
    setInterval(() => {
      setTermo(prev => !prev);
    }, 10000);
  }, []);

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>image</TableCell>
              <TableCell>title</TableCell>
              <TableCell>publish time</TableCell>
              <TableCell>status</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          {loading ? <div>loading...</div> : <TableBody>

            {posts.length === 0 ? <div>No Post yet</div> : posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left"><img alt={row.title} src={row.image} className="w-[80px] h-[40px]" /></TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.publishedAt}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left" className="text-blue-300 underline cursor-pointer">
                  <Link href={`/posts/${row.id}`}>
                    view
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>
      </TableContainer>
    )
  }
