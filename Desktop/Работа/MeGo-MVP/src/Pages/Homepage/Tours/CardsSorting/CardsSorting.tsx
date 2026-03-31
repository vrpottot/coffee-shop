import { useState } from 'react';
import type { CardsSortingProps, SortType } from './types';
import { SORT_OPTIONS_LIST } from './constants';
import s from './styles.module.css';

export const CardsSorting = ({
    value,
    onChange,
    className,
}: CardsSortingProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const activeOption = SORT_OPTIONS_LIST.find(
        option => option.value === value
    );

    const handleSelect = (newValue: SortType) => {
        onChange(newValue);
        setIsOpen(false);
    };

    return (
        <div className={`${s.root} ${className ?? ''}`}>
            <button
                type="button"
                className={s.trigger}
                onClick={() => setIsOpen(prev => !prev)}
            >
                {activeOption?.label}
                <span className={`${s.arrow} ${isOpen ? s.open : ''}`}>
                    <svg viewBox="0 0 16 16" width="16" height="16">
                        <path
                            d="M4 6L8 10L12 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className={s.dropdown}>
                    {SORT_OPTIONS_LIST.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            className={`${s.option} ${option.value === value ? s.active : ''
                                }`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
