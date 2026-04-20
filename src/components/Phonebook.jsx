import { useState } from 'react';

import { Check, Pencil, Phone, Search, Trash2, User, UserPlus, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Phonebook() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', number: '+1 234 567 8900' },
    { id: 2, name: 'Jane Smith', number: '+1 987 654 3210' },
    { id: 3, name: 'Bob Wilson', number: '+1 555 123 4567' },
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  const addContact = () => {
    if (name.trim() && number.trim()) {
      setContacts([...contacts, { id: Date.now(), name: name.trim(), number: number.trim() }]);
      setName('');
      setNumber('');
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const startEditing = (contact) => {
    setEditingId(contact.id);
    setEditName(contact.name);
    setEditNumber(contact.number);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName('');
    setEditNumber('');
  };

  const saveEdit = (id) => {
    if (editName.trim() && editNumber.trim()) {
      setContacts(
        contacts.map((contact) =>
          contact.id === id
            ? { ...contact, name: editName.trim(), number: editNumber.trim() }
            : contact
        )
      );
      setEditingId(null);
      setEditName('');
      setEditNumber('');
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Phonebook</h1>
          <p className="text-slate-400">Manage your contacts easily</p>
        </div>

        {/* Add Contact Card */}
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-white">
              <UserPlus className="h-5 w-5 text-emerald-400" />
              Add New Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-slate-600 bg-slate-700/50 pl-10 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                />
              </div>
              <div className="relative">
                <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border-slate-600 bg-slate-700/50 pl-10 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                />
              </div>
            </div>
            <Button
              onClick={addContact}
              className="w-full bg-emerald-500 font-medium text-white hover:bg-emerald-600"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </CardContent>
        </Card>

        {/* Search/Filter */}
        <div className="relative">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search contacts..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border-slate-700 bg-slate-800/50 py-6 pl-12 text-lg text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
          />
        </div>

        {/* Contacts List */}
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-white">
              <span>Contacts</span>
              <span className="text-sm font-normal text-slate-400">
                {filteredContacts.length} contact{filteredContacts.length !== 1 && 's'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredContacts.length === 0 ? (
              <div className="py-12 text-center text-slate-400">
                <Phone className="mx-auto mb-4 h-12 w-12 opacity-50" />
                <p>No contacts found</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="group flex items-center gap-4 rounded-xl bg-slate-700/30 p-4 transition-all hover:bg-slate-700/50"
                  >
                    {/* Avatar */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-lg font-semibold text-white">
                      {contact.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Contact Info or Edit Form */}
                    {editingId === contact.id ? (
                      <div className="flex flex-1 flex-col gap-2 md:flex-row">
                        <Input
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border-slate-500 bg-slate-600/50 text-white"
                        />
                        <Input
                          value={editNumber}
                          onChange={(e) => setEditNumber(e.target.value)}
                          className="border-slate-500 bg-slate-600/50 text-white"
                        />
                      </div>
                    ) : (
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-white">{contact.name}</p>
                        <p className="truncate text-sm text-slate-400">{contact.number}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {editingId === contact.id ? (
                        <>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => saveEdit(contact.id)}
                            className="h-9 w-9 text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={cancelEditing}
                            className="h-9 w-9 text-slate-400 hover:bg-slate-400/10 hover:text-slate-300"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => startEditing(contact)}
                            className="h-9 w-9 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-blue-400/10 hover:text-blue-400"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => deleteContact(contact.id)}
                            className="h-9 w-9 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-400/10 hover:text-red-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
