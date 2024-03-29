import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			
		]
		this._brands = [
			
		]
		this._devices = [
		
		]
		this._selectedType = {}
		this._selectedBrand = {}
		this._page = 1
		this._totalCount = 0
		this._limit = 3
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(devices) {
		this._devices = devices
	}

	setUser(user) {
		this._user = user
	}

	setSelectedType(type) {
		this.setPage(1)
		this._selectedType = type
	}

	setSelectedBrand(brand) {
		this.setPage(1)
		this._selectedBrand = brand
	}

	setPage(pages) {
		this._page = pages
	}

	setTotalCount(totalCount) {
		this._totalCount = totalCount
	}

	setLimit(limit) {
		this._limit = limit
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}

	get selectedType() {
		return this._selectedType
	}

	get selectedBrand() {
		return this._selectedBrand
	}

	get totalCount() {
		return this._totalCount
	}

	get page() {
		return this._page
	}

	get limit() {
		return this._limit
	}
}