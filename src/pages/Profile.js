import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'C:/Users/bendi/final-project/src/styles/profile.css'
const Profile = () => {
  return (
    <Card className ="profile-card">
      <Card.Img variant="top" src={'https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/448943716_2265570520441333_3008522587174384373_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8xW-NSl_JqYQ7kNvgHsVjU8&_nc_ht=scontent.ftbs4-2.fna&oh=00_AYCayezCcFc1v0E9pBciwGhZ95X8tEq37thCdNBJhFF8Dw&oe=668CB397'} alt="Profile" className="profile-pic"/>
      <Card.Body>
        <Card.Title className="profile-name">Nino Bendianishvili</Card.Title>
        <Card.Subtitle className="mb-2 text-muted profile-username">@ninibenn</Card.Subtitle>
        <Card.Text>
          <p><a href="mailto:bendianishvili.nino@kiu.edu.ge">bendianishvili.nino@kiu.edu.ge</a></p>
          <p>02/02/2003</p>
        </Card.Text>
        <Button variant="primary" className="edit-button">Edit Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
