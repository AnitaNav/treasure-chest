import ToyListItem from '../ToyListItem/ToyListItem';

export default function ToyList({ toyItems }) {
  const toys = toyItems.map(toy =>
    <ToyListItem
      key={toy._id}
      ToyItem={toy}
    />
  );
  return (
    <main>
      {toys}
    </main>
  );
}