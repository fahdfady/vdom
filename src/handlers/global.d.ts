export = {};
declare global {
    interface Running {
        execute: () => void;
        dependencies: Set<Set<() => void>>;
    }
    interface Window {
        route: (e: any) => void;
    }
const root = <HTMLElement>document.getElementById("root");

}