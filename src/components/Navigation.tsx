import './navigation.css';

interface NavigationProps {
    Size: 'Desktop' | 'Tablet' | 'Mobile';
}

export const Navigation = ({
    Size = 'Desktop',
}: NavigationProps) => {
    return(
        <div 
            className={[
                `navigation`,
                `navigation--${Size}`,
            ].join(' ')}
        >
            Secure checkout
        </div>
    )
}