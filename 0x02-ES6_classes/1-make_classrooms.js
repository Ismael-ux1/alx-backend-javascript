import ClassRoom from './0-classroom';

// Implement initializeRooms function
export default function initializeRooms() {
  // Initialize an array of 3 ClassRoom objects with sizes 19, 20, and 34
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  // Return the array of ClassRoom objects
  return rooms;
}
