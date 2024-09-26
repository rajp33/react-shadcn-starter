import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';

const Question1 = () => {
    const [items, setItems] = React.useState([
        'apple',
        'banana',
    ]);
    
    const handleAddItem = (value: string) => {
        items.push(value);
        setItems(items);
    }
    
    return (
    <div className='flex flex-col gap-4'>
        {items.length > 0 && <List items={items} />}
        <AddItemForm handleAddItem={handleAddItem} />
    </div>
    )
}

const List = ({ items }: { items: string[] }) => {
    return (
        <div className='flex flex-col gap-4'>
            {items.map((item, index) => (
                <Card key={index} className='flex flex-row justify-between w-[200px] p-4'>
                    <CardContent>
                        <CardTitle>{item}</CardTitle>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

const AddItemForm = ({ handleAddItem }: { handleAddItem: (value: string) => void }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddItem(value);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
        <Input type="text" value={value} onChange={handleChange} />
        <Button type="submit">Add Item</Button> 
        <p>The add button here isn't working</p>
        </form>
    )
}

export default Question1;