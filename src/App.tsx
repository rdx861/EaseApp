import React, { useState } from 'react';

interface Room {
  roomNo: string;
  billing: boolean;
  date: string;
  cost: number;
  deduction: number;
}

const RoomData = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoom, setNewRoom] = useState<Room>({ roomNo: '', billing: false, date: '', cost: 0, deduction: 0 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRooms([...rooms, newRoom]);
    setNewRoom({ roomNo: '', billing: false, date: '', cost: 0, deduction: 0 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoom({ ...newRoom, billing: e.target.checked });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: parseInt(value) });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">Room Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomNo">
              Room No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="roomNo"
              name="roomNo"
              value={newRoom.roomNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billing">
              Billing
            </label>
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="billing"
              name="billing"
              checked={newRoom.billing}
              onChange={handleCheckboxChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="date"
              name="date"
              value={newRoom.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cost">
              Cost
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="cost"
              name="cost"
              value={newRoom.cost}
              onChange={handleNumberChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deduction">
              Deduction
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="deduction"
              name="deduction"
              value={newRoom.deduction}
              onChange={handleNumberChange}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Room
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-4">Room List</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Room No</th>
              <th className="px-4 py-2">Billing</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Cost</th>
              <th className="px-4 py-2">Deduction</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{room.roomNo}</td>
                <td className="px-4 py-2">{room.billing ? 'Billing' : 'Non Billing'}</td>
                <td className="px-4 py-2">{room.date}</td>
                <td className="px-4 py-2">{room.cost}</td>
                <td className="px-4 py-2">{room.deduction}</td>
                <td className="px-4 py-2">{room.cost - room.deduction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomData;
