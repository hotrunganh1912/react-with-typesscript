interface StartShip {
  name: string;
  enableHyperJump: boolean;
}

const startShip: Record<string, StartShip> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperJump: true,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperJump: false,
  },
};

// như  kiể tại thành  object string là  key còn cái còn  lại là  giá trị theo  chuẩn  tại đó