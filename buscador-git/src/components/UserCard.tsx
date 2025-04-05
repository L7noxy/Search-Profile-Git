import './UserCard.css'



interface UserCardProps {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
  };
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="container-card">
      <img
        src={user.avatar_url}
        alt="Avatar"
      />
      <div className='info-user'>
        <h2>{user.name || "Nome não disponível"}</h2>
        <p>{user.bio || "Sem bio disponível"}</p>
      </div>

    </div>
  );
}
