import Card from '@/components/ui/Card';



const cardsData = [
  {
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Card Title 1',
    description: 'This is a description for card 1.',
  },
  {
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
  },
  {
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Card Title 3',
    description: 'This is a description for card 3.',
  },
  {
    imageSrc: 'https://via.placeholder.com/400x300',
    title: 'Card Title 4',
    description: 'This is a description for card 4.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
