import Layout from '@/Layouts/Layout.jsx';
import { useState } from 'react';
export default function Index({projects, fields}) {

    const [sortField, setSortField] = useState(fields[0]);
    const [sortDirection, setSortDirection] = useState('asc');

    const sortedProjects = [...projects].sort((a, b) => {

        const aVal = a[sortField];
        const bVal = b[sortField];

     

        // comparación básica (string/number)
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    //función de ordenacion
    const sort = (field) => {
        if (sortField == field){
            setSortDirection(sortDirection == 'asc' ? 'desc' : 'asc');
        }
        else
        {
            setSortField(field);
            setSortDirection('asc');
        }
    }

    return (
        <Layout>
            <div className="h-96 w-96 overflow-x-auto">
                <table className="table-xs table-pin-rows table-pin-cols table">
                    <thead>
                        <tr>
                            {fields.map((field) => (
                                <th
                                    key={field}
                                    onClick={() => sort(field)}
                                    className="cursor-pointer select-none"
                                >
                                    {field}
                                    {sortField === field && (
                                        <span className="ml-1">
                                            {sortDirection === 'asc'
                                                ? '▲'
                                                : '▼'}
                                        </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((project) => (
                            <tr key={project.id}>
                                {fields.map((field) => (
                                    <td key={field}>{project[field]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );


}
