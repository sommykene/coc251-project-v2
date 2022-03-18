import {
  Box,
  Button,
  CircularProgress,
  Paper,
  styled,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
// import { APIKey } from "../../config/IgboAPIConfig";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const fetchData = (word, callback) => {
//   console.log("hdksa");
//   return fetch(`https://igboapi.com/api/v1/words?keyword=${word}`, {
//     headers: {
//       accept: "application/json",
//       "X-API-Key": APIKey,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => callback(data));
// };

export default function Dictionary() {
  // const [results, setResults] = useState([]);
  // const [searchWord, setSearchWord] = useState("");
  // const [fetchLoading, setFetchLoading] = useState(false);

  // const handleSearch = () => {
  //   setFetchLoading(true);
  //   setResults([]);
  //   fetchData(searchWord, (data) => handleResults(data));
  // };

  // const handleResults = (data) => {
  //   setFetchLoading(false);
  //   setResults(data);
  // };

  // const handleChange = (e) => {
  //   setSearchWord(e.target.value);
  // };

  // return (
  //   <Box>
  //     <Item sx={{ mb: 2 }}>
  //       <h1>Search For Any Word - English or Igbo</h1>
  //       <TextField
  //         id="outlined-basic"
  //         label="English or Igbo Word"
  //         variant="outlined"
  //         sx={{ width: "100%" }}
  //         value={searchWord}
  //         onChange={handleChange}
  //       />
  //       <Button onClick={handleSearch}>Search</Button>
  //     </Item>
  //     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
  //       {fetchLoading && <CircularProgress />}
  //       {!fetchLoading &&
  //         results.map((result, index) => (
  //           <Item key={index} sx={{ width: "20%" }}>
  //             <h1>{result.word}</h1>
  //             <p>{result.definitions}</p>
  //             {result.pronunciation && (
  //               <audio controls>
  //                 <source src={result.pronunciation} type="audio/webm" />
  //                 Your browser does not support the audio tag.
  //               </audio>
  //             )}
  //           </Item>
  //         ))}
  //     </Box>
  //   </Box>
  // );

  return "hi";
}
