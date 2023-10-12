import { ObjectId } from 'mongodb'
import { db } from './connectDb.js'

const fishDb = db.collection('fish')

const theFish = {
	species: 'tetro',
	origin: 'Amazon',
	color: 'silver',
	size: '1"',
	family: {
		dad: '🐠',
		sister: '🍣',
		mom: { cool: true, special: undefined },
		brothers: ['🐢', '🐶'],
	},
}

/**
 * CRUD
 */

// Add a fish
export async function addAFish() {
	const fishAdded = await fishDb.insertOne(theFish)
	console.log('fishAdded ->', fishAdded)
}

// Get all fishies
export async function getAllFish() {
	const fishList = await fishDb.find({}).toArray()
	console.table(fishList)
}

// delete tretro fish ??
export async function deleteOneFish() {
	// 1. find the fish we want to delete ???
	// 2. delete it!

	// const fishDeleted = await fishDb.findOneAndDelete({species: 'tetro'})
	// find one and delete by id???  WTF?
	const myCleanId = new ObjectId('65283a1bbcf362bf4cb05574')

	const fishDeleted = await fishDb.findOneAndDelete({ _id: myCleanId })
	console.log('fishDeleted ->', fishDeleted)
}

// Update Fish
export async function updateOneFish() {
	// 1. define the fish we want to update
	// 2. determine what property want to update
	// 3. Find the item we want update
	// 4. Then we update with new data

	const cleanId = new ObjectId('65281c76f90d505d19147e7a')
	const dataToUpdate = { color: 'red' }

	const updatedFish = await fishDb.findOneAndUpdate({ _id: cleanId }, { $set: dataToUpdate })
	console.log('updatedFish ->', updatedFish)
}
