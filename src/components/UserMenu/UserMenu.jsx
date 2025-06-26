function UserMenu({ onLogOut, user }) {
    return (
    <>
    <p>Welcome {user.name}!</p>
    <button type='button' onClick={onLogOut}>Log Out</button>
    </>
    );
}

export default UserMenu;