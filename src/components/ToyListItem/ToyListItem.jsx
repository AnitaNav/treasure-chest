export default function ToyListItem({ toyItem }) {
    return (
      <div className="ToyListItem">
        <div className="name">{toyItem.name}</div>
        <div>{toyItem.image}</div>
          <button>
            ADD
          </button>
        </div>
    );
  }