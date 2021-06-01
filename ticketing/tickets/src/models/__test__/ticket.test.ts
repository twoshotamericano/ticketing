import { Ticket } from '../ticket';

it('implements optimistic currency control', async (done) => {
  //Crete an instance of a ticket

  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123',
  });

  //Save the ticket to db
  await ticket.save();

  //fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  //make separate changes
  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  //save the first fetched ticket
  await firstInstance!.save();

  //save the second fetched ticket and expect an error
  try {
    await secondInstance!.save();
  } catch (error) {
    return done();
  }
  throw new Error('should not reach this point!');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123',
  });

  //Save the ticket to db
  await ticket.save();

  expect(ticket.version).toEqual(0);
  //fetch the ticket twice
  await ticket.save();

  expect(ticket.version).toEqual(1);

  await ticket.save();

  expect(ticket.version).toEqual(2);
});
