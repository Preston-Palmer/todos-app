<template>
    <div class="nav items-center justify-center">
        <container class="grid grid-cols-8 max-w-screen">
            <RouterLink to="/Home"></RouterLink>
            <RouterLink to="/Edit"></RouterLink>
        </container>
    </div>
    <div>
        <RouterView />
    </div>
</template>
