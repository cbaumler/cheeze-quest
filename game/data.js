"use strict";


createItem("me",
  PLAYER(),
    { loc:"lounge", regex:/^me|myself|player$/, examine: "Just a regular guy.", }
);

createRoom("lounge",
  { desc:"A smelly room with an old settee and a tv.", }
);
