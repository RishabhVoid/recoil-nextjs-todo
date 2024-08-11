const deleteAtIndex = <T>(lis: T[], index: number): T[] => {
  return [...lis.slice(0, index), ...lis.slice(index + 1)];
};

export default deleteAtIndex;
