import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// {
//   /* <div>
//       <h1>N {name1} </h1>
//       <div
//         css={css`
//       padding: 32px;
//       background-color: hotpink;
//       font-size: 24px;
//       border-radius: 4px;
//     `}
//       >
//         Hover to change color.
//       </div>

//       <Button> styled </Button>

//       <div
//         css={{
//           backgroundColor: 'hotpink',
//           '&:hover': {
//             color: 'lightgreen'
//           }
//         }}
//       >
//         This
//       </div> */
// }
