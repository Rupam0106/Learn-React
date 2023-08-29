export default interface ListGroup {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
