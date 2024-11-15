interface Props {
    counter: number
}
export const Navbar = ({ counter }: Props) => {
    console.log('puedes ver esto maldito ge?');
    return (
        <div>
            { counter }
        </div>
    );
}
