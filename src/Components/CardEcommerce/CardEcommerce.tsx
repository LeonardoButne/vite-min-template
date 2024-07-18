// EcommerceCard.tsx
import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import './CardEcommerce.css';

interface EcommerceProps {
  ecommerce: {
    id: string;
    ecommerce_name: string;
    category: string;
    website: string;
    provinceSelect: string;
    citySelect: string;
    phone: string;
    contact_email: string;
    legal_representative: string;
    foundation_date: string;
    status: boolean;
    profileImage: string;
  };
}

const CardEcommerce: React.FC<EcommerceProps> = ({ ecommerce }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/perfil/${ecommerce.ecommerce_name}`);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{marginTop: '40px' ,width: '300px', height: '450px' }}>
      <Card.Section>
        <Image
          src={ecommerce.profileImage}
          sizes="sm"
          height={200}
          alt={`${ecommerce.ecommerce_name} logo`}
          radius="md"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{ecommerce.ecommerce_name}</Text>
        {ecommerce.status ? (
          <Badge color="green">Active</Badge>
        ) : (
          <Badge color="red">Suspended</Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed">
        <strong>Category:</strong> {ecommerce.category}
        <br />
        <strong>Province:</strong> {ecommerce.provinceSelect}
        <br />
        <strong>City:</strong> {ecommerce.citySelect}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={handleViewProfile}>
        View Profile
      </Button>
    </Card>
  );
};

export default CardEcommerce;
