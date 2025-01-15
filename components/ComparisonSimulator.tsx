
// 'use client'; // Mark this as a Client Component

// import React, { useState, useEffect } from 'react';
// import { Button, Container, Grid, Paper, Typography, Box } from '@mui/material';

// interface ComparisonSimulatorProps {
//   textItems: string[];
//   imageItems: File[];
//   onRefresh: () => void;
// }

// const ComparisonSimulator: React.FC<ComparisonSimulatorProps> = ({ textItems, imageItems, onRefresh }) => {
//   const [items, setItems] = useState<(string | File)[]>([]);
//   const [currentPair, setCurrentPair] = useState<(string | File)[]>([]);
//   const [winner, setWinner] = useState<string | File | null>(null);

//   // Shuffle items on the client side
//   useEffect(() => {
//     const shuffled = [...textItems, ...imageItems].sort(() => Math.random() - 0.5);
//     setItems(shuffled);
//   }, [textItems, imageItems]);

//   // Update the current pair when items change
//   useEffect(() => {
//     if (items.length > 1) {
//       setCurrentPair([items[0], items[1]]);
//     } else if (items.length === 1) {
//       setWinner(items[0]);
//     }
//   }, [items]);

//   const handleSelect = (selectedIndex: number) => {
//     const winnerItem = currentPair[selectedIndex];
//     const loserItem = currentPair[1 - selectedIndex];

//     const newItems = items.filter((item) => item !== loserItem);
//     setItems(newItems);
//   };

//   return (
//     <Container>
//       {winner ? (
//         <Box style={{ textAlign: 'center' }}>
//           <Typography variant="h3" gutterBottom>
//             Winner:
//           </Typography>
//           {typeof winner === 'string' ? (
//             <Typography variant="h4" style={{ margin: '20px 0' }}>
//               {winner}
//             </Typography>
//           ) : (
//             <img
//               src={URL.createObjectURL(winner)}
//               alt={winner.name}
//               style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
//             />
//           )}
//           <Button variant="contained" color="primary" onClick={onRefresh}>
//             Refresh
//           </Button>
//         </Box>
//       ) : (
//         <Grid container spacing={3}>
//           {currentPair.map((item, index) => (
//             <Grid item xs={6} key={typeof item === 'string' ? item : item.name}>
//               <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
//                 {typeof item === 'string' ? (
//                   <Typography variant="h4">{item}</Typography>
//                 ) : (
//                   <img src={URL.createObjectURL(item)} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
//                 )}
//                 <Button variant="contained" color="primary" onClick={() => handleSelect(index)}>
//                   Select
//                 </Button>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default ComparisonSimulator;


import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Paper, Typography, Box, CircularProgress } from '@mui/material';

interface ComparisonSimulatorProps {
  textItems: string[];
  imageItems: File[];
  onRefresh: () => void;
}

const ComparisonSimulator: React.FC<ComparisonSimulatorProps> = ({ textItems, imageItems, onRefresh }) => {
  const [items, setItems] = useState<(string | File)[]>([]);
  const [currentPair, setCurrentPair] = useState<(string | File)[]>([]);
  const [winner, setWinner] = useState<string | File | null>(null);

  useEffect(() => {
    const shuffled = [...textItems, ...imageItems].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, [textItems, imageItems]);

  useEffect(() => {
    if (items.length > 1) {
      setCurrentPair([items[0], items[1]]);
    } else if (items.length === 1) {
      setWinner(items[0]);
    }
  }, [items]);

  const handleSelect = (selectedIndex: number) => {
    const winnerItem = currentPair[selectedIndex];
    const loserItem = currentPair[1 - selectedIndex];
    setItems(items.filter((item) => item !== loserItem));
  };

  return (
    <Container>
      {winner ? (
        <Box textAlign="center">
          <Typography variant="h3" gutterBottom>
            Winner:
          </Typography>
          {typeof winner === 'string' ? (
            <Typography variant="h4">{winner}</Typography>
          ) : (
            <img
              src={URL.createObjectURL(winner)}
              alt={winner.name}
              style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
            />
          )}
          <Button variant="contained" color="primary" onClick={onRefresh} sx={{ mt: 3 }}>
            Restart
          </Button>
        </Box>
      ) : (
        currentPair.length > 0 ? (
          <Grid container spacing={3}>
            {currentPair.map((item, index) => (
              <Grid item xs={12} sm={6} key={typeof item === 'string' ? item : item.name}>
                <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                  {typeof item === 'string' ? (
                    <Typography variant="h5">{item}</Typography>
                  ) : (
                    <img
                      src={URL.createObjectURL(item)}
                      alt={item.name}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => handleSelect(index)}
                  >
                    Select
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <CircularProgress />
        )
      )}
    </Container>
  );
};

export default ComparisonSimulator;
