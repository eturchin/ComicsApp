import { action, makeAutoObservable } from 'mobx';
import { getComicByNum, getRandomComic } from '../api/comicApi.ts';
import { Comic } from "../models/Comic.ts";

export class ComicStore {
    comic: Comic | null = null;
    history: Comic[] = [];
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
        this.loadHistoryFromLocalStorage();
    }

    @action
    async fetchRandomComic() {
        this.setLoading(true);
        try {
            const data = await getRandomComic();
            this.comic = data;
            this.addToHistory(data);
        } catch (error) {
            console.error('Failed to fetch random comic:', error);
        } finally {
            this.setLoading(false);
        }
    }

    @action
    async fetchComicByNum(num: number) {
        this.setLoading(true);
        try {
            const data = await getComicByNum(num);
            if (data) {
                this.comic = data;
                this.moveToTopOfHistory(data);
            } else {
                console.error(`Received null data for comic number ${num}`);
            }
        } catch (error) {
            console.error(`Failed to fetch comic number ${num}:`, error);
        } finally {
            this.setLoading(false);
        }
    }

    @action
    setLoading(isLoading: boolean) {
        this.loading = isLoading;
    }

    @action
    addToHistory(comic: Comic) {
        if (!this.history.some(c => c.num === comic.num)) {
            this.history.unshift(comic);
            this.saveHistoryToLocalStorage();
        }
    }

    @action
    removeFromHistory(num: number) {
        this.history = this.history.filter(c => c.num !== num);
        this.saveHistoryToLocalStorage();
    }

    @action
    saveHistoryToLocalStorage() {
        localStorage.setItem('comicHistory', JSON.stringify(this.history));
    }

    @action
    moveToTopOfHistory(comic: Comic) {
        this.history = this.history.filter(c => c.num !== comic.num);
        this.history.unshift(comic);
        this.saveHistoryToLocalStorage();
    }

    @action
    loadHistoryFromLocalStorage() {
        const storedHistory = localStorage.getItem('comicHistory');
        if (storedHistory) {
            this.history = JSON.parse(storedHistory);
        }
    }
}

export const comicStore = new ComicStore();
