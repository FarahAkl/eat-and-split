import Button from "./Button";

export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          Your {friend.name} owes you {friend.balance}$
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}