import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Question2: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [lastAction, setLastAction] = useState<string>('');
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
    setLastAction(`Item ${item} ${selectedItems.includes(item) ? 'deselected' : 'selected'}`);
  };

  const handleCardClick = (category: string) => {
    setLastAction(`Category ${category} clicked`);
    setClickedCategory(category);
    setTimeout(() => setClickedCategory(null), 300);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Question 2</h1>
      <p className="mb-4">
        This component has an issue where category is being selected when item is clicked.
      </p>
      <div className="flex space-x-4">
        {['A', 'B'].map(category => (
          <Card 
            key={category} 
            className={`w-64 transition-colors duration-300 ${clickedCategory === category ? 'bg-yellow-100' : ''}`} 
            onClick={() => handleCardClick(category)}
          >
            <CardHeader>
              <CardTitle>Category {category}</CardTitle>
            </CardHeader>
            <CardContent>
              {[1, 2, 3].map(item => (
                <Button
                  key={item}
                  className={`mb-2 w-full ${selectedItems.includes(`${category}${item}`) ? 'bg-blue-500 hover:bg-blue-500' : ''}`}
                  onClick={() => handleItemClick(`${category}${item}`)}
                >
                  Item {category}{item}
                </Button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Selected Items:</h2>
        <p>{selectedItems.join(', ') || 'None'}</p>
      </div>
      <div className="mt-2">
        <h2 className="text-xl font-semibold">Last Action:</h2>
        <p>{lastAction || 'No action yet'}</p>
      </div>
    </div>
  );
};

export default Question2;