import './chip.css';
import Icon from './assets/Icon_white2.svg';

interface ChipProps {
    Size?: 'Large' | 'Small';
    State?: 'Default' | 'Focus' | 'Hover' | 'Pressed';
    LabelText?: string;
    Single?: boolean;
    ShowChip02?: boolean;
    ShowChip03?: boolean;
    ShowChip04?: boolean;
    ShowChip05?: boolean;
    ShowChip06?: boolean;
    onClick?: () => void;
}

export const Chip = ({
    Size = 'Large',
    State = 'Default',
    LabelText = 'Label',
    Single = true,
    ShowChip02 = true,
    ShowChip03 = false,
    ShowChip04 = false,
    ShowChip05 = false,
    ShowChip06 = false,
    ...props
}: ChipProps) => {
    return(
        <>
            {Single && <button 
                className={[
                    `chip`, 
                    `chip--${Size}`, 
                    `chip--${State}`,
                    `chip--${State}--${Size}`
                ].join(' ')}
                {...props}
            >
                <div 
                    style={{
                        marginRight: (State==='Pressed') ? '32px' : '0px'
                    }}
                >
                    {LabelText}
                </div>
            </button>}
            {!Single && <div>
                <div className='chipHeading'>Heading</div>
                <div 
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: (Size==='Small') ? '328px' : '780px',
                    }}
                >
                    <button className='chip'>
                        {LabelText}
                    </button>
                    {ShowChip02 && <button className='chip'>
                        {LabelText}
                    </button>}
                    {ShowChip03 && <button className='chip'>
                        {LabelText}
                    </button>}
                    {ShowChip04 && <button className='chip'>
                        {LabelText}
                    </button>}
                    {ShowChip05 && <button className='chip'>
                        {LabelText}
                    </button>}
                    {ShowChip06 && <button className='chip'>
                        {LabelText}
                    </button>}
                </div>
            </div>}
        </>
    )
}