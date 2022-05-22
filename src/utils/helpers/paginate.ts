export function paginate<T>(arr: T[], itemsPerPage: number): T[]{
    const totalItems = arr.length;

    let paginated: any[] = [];
    for (let i = 0; i < totalItems; i += itemsPerPage){
        paginated.push(arr.slice(i, i + itemsPerPage));
    }
    return paginated;
}